import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from './models/User';
import SkipperSubmission from './models/SkipperSubmission';

const resolvers = {
  Query: {
    getUser: async (_: any, { id }: { id: string }) => {
      return await User.findById(id);
    },
    getSkipperSubmissions: async () => {
      return await SkipperSubmission.find();
    },
  },
  Mutation: {
    login: async (_: any, { email, password }: { email: string; password: string }) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw new Error('User not found');
      }
      const isValidPassword = await bcrypt.compare(password, user.password);
      if (!isValidPassword) {
        throw new Error('Invalid password');
      }
      const token = jwt.sign({ userId: user.id }, 'your-secret-key', { expiresIn: '1h' });
      return token;
    },
    createSkipperSubmission: async (_: any, args: any) => {
      const skipperSubmission = new SkipperSubmission(args);
      return await skipperSubmission.save();
    },
  },
};

export default resolvers;