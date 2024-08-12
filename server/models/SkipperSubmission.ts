import mongoose, { Document, Schema } from 'mongoose';

export interface ISkipperSubmission extends Document {
  eventId: string;
  skipper: string;
  vessel: string;
  company: string;
  description: string;
  date: string;
  time: string;
}

const skipperSubmissionSchema: Schema = new Schema({
  eventId: String,
  skipper: String,
  vessel: String,
  company: String,
  description: String,
  date: String,
  time: String,
});

export default mongoose.model<ISkipperSubmission>('SkipperSubmission', skipperSubmissionSchema);