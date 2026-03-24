export interface XmlTag {
  tag_id: number;
  tag_name: string;
  parent_tag_id: number;
  is_attribute: boolean;
  multiple_allowed: boolean;
  mandatory_type: 1 | 2 | 3;
  mandatory_condition: string;
  description: string;
  validation_rules: string;
  groupID: string;
  relation_type: string;
  relation_with: string;
  is_notNew: boolean;
}

// Dynamically load SheetJS from CDN
let xlsxLib: any = null;

async function loadXlsx(): Promise<any> {
  if (xlsxLib) return xlsxLib;
  const script = document.createElement('script');
  script.src = 'https://cdn.sheetjs.com/xlsx-0.20.3/package/dist/xlsx.full.min.js';
  await new Promise<void>((resolve, reject) => {
    script.onload = () => resolve();
    script.onerror = () => reject(new Error('Failed to load SheetJS'));
    document.head.appendChild(script);
  });
  xlsxLib = (window as any).XLSX;
  return xlsxLib;
}

function parseBool(val: any): boolean {
  if (typeof val === 'boolean') return val;
  if (typeof val === 'string') return val.toLowerCase() === 'true' || val === '1';
  if (typeof val === 'number') return val === 1;
  return false;
}

function parseNum(val: any, fallback: number): number {
  const n = Number(val);
  return isNaN(n) ? fallback : n;
}

export async function loadXmlSchemaFromExcel(url: string): Promise<XmlTag[]> {
  const XLSX = await loadXlsx();
  const response = await fetch(url);
  const arrayBuffer = await response.arrayBuffer();
  const workbook = XLSX.read(arrayBuffer, { type: 'array' });
  const sheet = workbook.Sheets[workbook.SheetNames[0]];
  const rows: any[] = XLSX.utils.sheet_to_json(sheet, { defval: '' });

  return rows
    .filter((row: any) => row.tag_id && row.tag_name)
    .map((row: any): XmlTag => ({
      tag_id: parseNum(row.tag_id, 0),
      tag_name: String(row.tag_name).trim(),
      parent_tag_id: parseNum(row.parent_tag_id, 0),
      is_attribute: parseBool(row.is_attribute),
      multiple_allowed: parseBool(row.multiple_allowed) || parseNum(row.multiple_allowed, 0) === 1,
      mandatory_type: (parseNum(row.mandatory_type, 2) as 1 | 2 | 3),
      mandatory_condition: String(row.mandatory_condition || '').trim(),
      description: String(row.description || '').trim(),
      validation_rules: String(row.validation_rules || '').trim(),
      groupID: String(row.groupID || '').trim(),
      relation_type: String(row.relation_type || '').trim(),
      relation_with: String(row.relation_with || '').trim(),
      is_notNew: parseBool(row.is_notNew),
    }));
}
