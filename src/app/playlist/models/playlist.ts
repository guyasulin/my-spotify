export class Playlist {
	id?: string;
	name?: string;
	description?: string;
	added_at?: string;
	album_type?: string;
	type?: string;
	images?: images[];
	icons?: icons[];
	artists: artists[];
	duration_ms: number;
	album: album;
}

class album {
	images: images[];
}

class images {
	url: string;
}

class icons {
	url: string;
}

class artists {
	name: string;
}
