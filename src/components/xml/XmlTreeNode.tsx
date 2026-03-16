import React, { useEffect, useState } from 'react';
import { ChevronRight, ChevronDown, Info, AlertCircle, Repeat } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import type { XmlTag } from '@/data/xmlSchemaData';

interface TreeNode extends XmlTag {
  children: TreeNode[];
}

interface XmlTreeNodeProps {
  node: TreeNode;
  depth?: number;
  expandedAll?: boolean;
  resolveRelationLabel?: (node: TreeNode) => string | null;
}

const mandatoryConfig = {
  1: { label: 'Mandatory', borderClass: 'border-2 border-solid border-green-500 dark:border-green-400', badgeClass: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' },
  2: { label: 'Optional', borderClass: 'border-2 border-dashed border-amber-500 dark:border-amber-400', badgeClass: 'bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200' },
  3: { label: 'Conditional', borderClass: 'border-2 border-amber-500 dark:border-amber-400', badgeClass: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200' },
} as const;

const XmlTreeNode: React.FC<XmlTreeNodeProps> = ({
  node,
  depth = 0,
  expandedAll = false,
  resolveRelationLabel,
}) => {
  const [isExpanded, setIsExpanded] = useState(expandedAll || depth < 2);
  const hasChildren = node.children.length > 0;
  const config = mandatoryConfig[node.mandatory_type] || mandatoryConfig[2];
  const relationLabel = resolveRelationLabel?.(node) ?? null;

  useEffect(() => {
    setIsExpanded(expandedAll);
  }, [expandedAll]);

  const borderClass = node.mandatory_type === 3
    ? 'border-2 border-purple-500 dark:border-purple-400'
    : config.borderClass;

  return (
    <div className="ml-1 md:ml-4">
      <div
        className={cn(
          'flex items-start gap-2 py-3 rounded-lg my-1 transition-all duration-200 hover:bg-muted/50 cursor-pointer group',
          borderClass,
          node.mandatory_type === 3 && 'border-double border-[3px]',
          node.is_attribute && 'bg-muted/30 italic'
        )}
        onClick={() => hasChildren && setIsExpanded((prev) => !prev)}
      >
        <div className="flex-shrink-0 w-5 h-5 mt-0.5">
          {hasChildren ? (
            isExpanded ? (
              <ChevronDown className="h-5 w-5 text-muted-foreground transition-transform" />
            ) : (
              <ChevronRight className="h-5 w-5 text-muted-foreground transition-transform" />
            )
          ) : (
            <span className="block w-5" />
          )}
        </div>

        <div className="flex-1 min-w-0 pr-1">
          <div className="flex items-center flex-wrap gap-2">
            <span className={cn(
              'font-mono text-sm font-semibold',
              node.is_attribute ? 'text-accent' : 'text-foreground'
            )}>
              {node.is_attribute ? `@${node.tag_name}` : `<${node.tag_name}>`}
            </span>

            <Badge variant="outline" className={cn('text-[10px] px-1.5 py-0', config.badgeClass)}>
              {config.label}
            </Badge>

            {node.validation_rules && (
              <Tooltip>
                <TooltipTrigger asChild>
                  <span className="inline-flex items-center gap-1 text-[11px] text-blue-600 dark:text-blue-400 cursor-help">
                    <Info className="h-3 w-3" />
                    <span>Validation</span>
                  </span>
                </TooltipTrigger>
                <TooltipContent side="right" className="max-w-sm">
                  <p className="text-sm text-left">{node.validation_rules}</p>
                </TooltipContent>
              </Tooltip>
            )}

            {node.multiple_allowed && (
              <Tooltip>
                <TooltipTrigger asChild>
                  <span className="inline-flex items-center gap-1">
                    <Repeat className="h-3.5 w-3.5 text-primary animate-pulse" />
                    <span className="text-[10px] text-muted-foreground font-medium">multiple</span>
                  </span>
                </TooltipTrigger>
                <TooltipContent>Multiple instances allowed</TooltipContent>
              </Tooltip>
            )}

            {node.is_attribute && (
              <Badge variant="secondary" className="text-[10px] px-1.5 py-0">
                attribute
              </Badge>
            )}

            {node.groupID && (
              <Badge variant="outline" className="text-[10px] px-1.5 py-0 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                Group {node.groupID}
              </Badge>
            )}

            {relationLabel && (
              <Badge variant="outline" className="text-[10px] px-1.5 py-0 bg-rose-100 text-rose-800 dark:bg-rose-900 dark:text-rose-200 whitespace-normal text-left">
                {relationLabel}
              </Badge>
            )}
          </div>

          {node.description && (
            <p className="text-xs text-muted-foreground mt-1">{node.description}</p>
          )}

          <div className="flex flex-wrap gap-2 mt-1">
            {node.mandatory_condition && (
              <Tooltip>
                <TooltipTrigger asChild>
                  <span className="inline-flex items-center gap-1 text-[11px] text-purple-600 dark:text-purple-400 cursor-help">
                    <AlertCircle className="h-3 w-3" />
                    Condition
                  </span>
                </TooltipTrigger>
                <TooltipContent side="right" className="max-w-sm">
                  <p className="text-sm text-left">{node.mandatory_condition}</p>
                </TooltipContent>
              </Tooltip>
            )}
          </div>
        </div>
      </div>

      {hasChildren && isExpanded && (
        <div className="border-l-2 border-muted ml-4 pl-2">
          {node.children.map((child) => (
            <XmlTreeNode
              key={child.tag_id}
              node={child}
              depth={depth + 1}
              expandedAll={expandedAll}
              resolveRelationLabel={resolveRelationLabel}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default XmlTreeNode;
export type { TreeNode };
