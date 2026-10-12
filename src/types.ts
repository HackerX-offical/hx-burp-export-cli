export interface BurpItem {
  url: string;
  host: string;
  method?: string;
  status?: number;
}

export interface BurpExportSummary {
  itemCount: number;
  hostCount: number;
  methods: Record<string, number>;
}
