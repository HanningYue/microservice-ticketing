import mongoose from 'mongoose';
import { Password } from '../services/password';

//An interface that describes the properties
//that required to create a new user
interface UserAttrs {
  email: string;
  password: string;
}

//An interface that describes properties(method)
//that User Model has
interface UserModel extends mongoose.Model<UserDoc> {
  build(attrs: UserAttrs): UserDoc;
}

//An interface that describes the properties
//that a User Document has
interface UserDoc extends mongoose.Document {
  updateEmail: any;
  email: string;
  password: string;
}

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.password;
        delete ret.__v;
      },
    },
  }
);

userSchema.pre('save', async function (done) {
  if (this.isModified('password')) {
    const hashed = await Password.toHash(this.get('password'));
    this.set('password', hashed);
  }
  done();
});

userSchema.statics.build = (attrs: UserAttrs) => {
  return new User(attrs);
};

const User = mongoose.model<UserDoc, UserModel>('User', userSchema);
const user = User.build({
  email: 'taer@sdf.com',
  password: 'asdfsd',
});
user.email;
user.password;

export { User };
