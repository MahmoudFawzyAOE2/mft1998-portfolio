import React, { useMemo, useState, useEffect } from 'react';
import { loadXmlSchemaFromExcel } from '@/data/xmlSchemaData';
import type { XmlTag } from '@/data/xmlSchemaData';
import XmlTreeNode from '@/components/xml/XmlTreeNode';
import type { TreeNode } from '@/components/xml/XmlTreeNode';
import { Button } from '@/components/ui/button';
import { Expand, Shrink, FileCode2, Loader2 } from 'lucide-react';

const EXCEL_URL = `${import.meta.env.BASE_URL}docs/XML_Tags_Schema.xlsx`;

function buildTree(data: XmlTag[]): TreeNode[] {
  const map = new Map<number, TreeNode>();
  const roots: TreeNode[] = [];

  data.forEach((tag) => {
    map.set(tag.tag_id, { ...tag, children: [] });
  });

  data.forEach((tag) => {
    const node = map.get(tag.tag_id)!;
    if (tag.parent_tag_id === 0 || !tag.parent_tag_id) {
      roots.push(node);
    } else {
      const parent = map.get(tag.parent_tag_id);
      if (parent) {
        parent.children.push(node);
      }
    }
  });

  return roots;
}

const XmlSchema: React.FC = () => {
  const [data, setData] = useState<XmlTag[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [key, setKey] = useState(0);
  const [expandAll, setExpandAll] = useState(false);

  useEffect(() => {
    loadXmlSchemaFromExcel(EXCEL_URL)
      .then((tags) => {
        setData(tags);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Failed to load XML schema:', err);
        setError('Failed to load XML schema data.');
        setLoading(false);
      });
  }, []);

  const tree = useMemo(() => buildTree(data), [data]);

  const handleToggleAll = () => {
    setExpandAll(!expandAll);
    setKey((k) => k + 1);
  };

  if (loading) {
    return (
      <div className="py-18">
        <div className="section-container flex items-center justify-center min-h-[400px]">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
          <span className="ml-3 text-muted-foreground">Loading XML schema…</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="py-18">
        <div className="section-container flex items-center justify-center min-h-[400px]">
          <p className="text-destructive">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="py-18">
      <div className="section-container">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-3">
            <FileCode2 className="h-8 w-8 text-primary" />
            <div>
              <h1 className="text-3xl font-bold">XML Schema Viewer</h1>
              <p className="text-muted-foreground text-sm mt-1">
                FATCA OECD XML Report Structure
              </p>
            </div>
          </div>
          <Button variant="outline" size="sm" onClick={handleToggleAll} className="self-start">
            {expandAll ? <Shrink className="h-4 w-4 mr-2" /> : <Expand className="h-4 w-4 mr-2" />}
            {expandAll ? 'Collapse All' : 'Expand All'}
          </Button>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap gap-4 mb-6 p-4 rounded-lg bg-muted/50 border text-sm">
          <div className="flex items-center gap-2">
            <div className="w-6 h-4 rounded border-2 border-solid border-green-500" />
            <span>Mandatory</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-4 rounded border-2 border-dashed border-amber-500" />
            <span>Optional</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-4 rounded border-[3px] border-double border-purple-500" />
            <span>Conditional</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-mono text-accent text-xs">@attr</span>
            <span>Attribute</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-primary animate-pulse">↻</span>
            <span>Multiple allowed</span>
          </div>
        </div>

        {/* Tree */}
        <div key={key} className="bg-card rounded-xl border p-4 shadow-sm">
          {tree.length > 0 ? (
            tree.map((root) => (
              <XmlTreeNode key={root.tag_id} node={root} depth={0} />
            ))
          ) : (
            <p className="text-muted-foreground text-center py-8">No tags found in the schema.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default XmlSchema;
