// 本地游戏数据配置
export type GameItem = {
	title: string;
	status: "playing" | "completed" | "planned";
	rating: number;
	cover: string;
	description: string;
	platform: string;
	year: string;
	genre: string[];
	developer: string;
	link: string;
	progress: number;
	totalProgress: number;
	startDate: string;
	endDate: string;
};

const localGamesList: GameItem[] = [];

export default localGamesList;
