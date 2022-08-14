export interface GithubResponse {
    page:                   Page;
    components:             Component[];
    incidents:              any[];
    scheduled_maintenances: any[];
    status:                 StatusClass;
}

export interface Component {
    id:                    string;
    name:                  string;
    status:                StatusEnum;
    created_at:            string;
    updated_at:            string;
    position:              number;
    description:           null | string;
    showcase:              boolean;
    start_date:            null | string;
    group_id:              null;
    page_id:               ID;
    group:                 boolean;
    only_show_if_degraded: boolean;
}

export enum ID {
    Kctbh9Vrtdwd = "kctbh9vrtdwd",
}

export enum StatusEnum {
    Operational = "operational",
}

export interface Page {
    id:         ID;
    name:       string;
    url:        string;
    time_zone:  string;
    updated_at: string;
}

export interface StatusClass {
    indicator:   string;
    description: string;
}
