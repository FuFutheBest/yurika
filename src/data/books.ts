// 本地书籍数据配置
export type BookItem = {
	title: string;
	status: "reading" | "completed" | "planned";
	rating: number;
	cover: string;
	description: string;
	volumes: string;
	year: string;
	genre: string[];
	author: string;
	link: string;
	progress: number;
	totalVolumes: number;
	startDate: string;
	endDate: string;
};

const localBooksList: BookItem[] = [];

export default localBooksList;
