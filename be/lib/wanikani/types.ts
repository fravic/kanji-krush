type isoDateTime = string;

// Subject response object from the Wanikani API
export interface Subject {
  id: number;
  object: string;
  url: string;
  data: {
    level: string;
    slug: string;
    characters: string;
    meanings: [
      {
        meaning: string;
        primary: boolean;
        accepted_answer: boolean;
      }
    ];
    readings: [
      {
        primary: boolean;
        reading: string;
        accepted_answer: boolean;
      }
    ];
  };
}

// Assignment response obect from the Wanikani API
export interface Assignment {
  id: number;
  object: string;
  url: string;
  data: {
    subject_id: number;
    srs_stage: number;
    unlocked_at: isoDateTime;
    started_at: isoDateTime;
    passed_at: isoDateTime;
    burned_at: isoDateTime;
    available_at: isoDateTime;
    resurrected_at: isoDateTime;
    passed: boolean;
    resurrected: boolean;
    hidden: boolean;
  };
}
