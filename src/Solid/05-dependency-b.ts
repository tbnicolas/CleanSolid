import { LocalDataBaseService, JsonDataBaseService, PostProvider } from './05-dependency-c';

export interface Post {
    body:   string;
    id:     number;
    title:  string;
    userId: number;
}


export class PostService {

    constructor(private postProvider: PostProvider){}

    private posts: Post[] = [];


    async getPosts() {
        //const jsonDB = new LocalDataBaseService();
        //const jsonDB = new JsonDataBaseService();
        this.posts = await this.postProvider.getPosts();

        return this.posts;
    }
}
