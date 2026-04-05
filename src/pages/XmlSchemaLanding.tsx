import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FileCode2, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const SCHEMA_FILES = [
  { file: 'XML_Tags_Schema.xlsx', label: 'XML_Tags_Schema' },
  { file: 'Schema_1.xlsx', label: 'Schema_1' },
  { file: 'Schema_2.xlsx', label: 'Schema_2' },
];

const XmlSchemaLanding: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="py-18">
      <div className="section-container">
        <div className="flex items-center gap-3 mb-8">
          <FileCode2 className="h-8 w-8 text-primary" />
          <div>
            <h1 className="text-3xl font-bold">XML Schema Viewer</h1>
            <p className="text-muted-foreground text-sm mt-1">
              Select a schema file to explore its structure
            </p>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SCHEMA_FILES.map(({ file, label }) => (
            <button
              key={file}
              onClick={() => navigate(`/xml/${encodeURIComponent(file)}`)}
              className="group flex items-center justify-between gap-4 rounded-lg border bg-card p-6 text-left transition-colors hover:border-primary hover:bg-accent"
            >
              <div className="flex items-center gap-3 min-w-0">
                <FileCode2 className="h-6 w-6 shrink-0 text-primary" />
                <div className="min-w-0">
                  <p className="font-medium truncate">{label}</p>
                  <p className="text-xs text-muted-foreground truncate">{file}</p>
                </div>
              </div>
              <ArrowRight className="h-5 w-5 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default XmlSchemaLanding;
