// Subject response object from the Wanikani API
export interface Subject {
  id: number;
  object: string;
  url: string;
  data: {
    level: string;
    slug: string;
    characters: string;
    meanings: [{
      meaning: string;
      primary: boolean;
      accepted_answer: boolean;
    }];
    readings: [{
      primary: boolean;
      reading: string;
      accepted_answer: boolean;
    }];
  };
}
