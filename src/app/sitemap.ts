import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: 'https://windows-web-11.vercel.app/',
			lastModified: new Date(),
			priority: 1,
		},
	];
}
