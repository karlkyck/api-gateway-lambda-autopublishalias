import { BasePost } from './BasePost';

export class Post extends BasePost {
	public readonly id: string;
	public readonly createdDate: Date;
	public readonly updatedDate: Date;
}