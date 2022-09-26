import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
	cloud_name: import.meta.env.VITE_CLOUD_NAME,
	api_key: import.meta.env.VITE_CLOUD_KEY,
	api_secret: import.meta.env.VITE_CLOUD_SECRET,
	secure: import.meta.env.MODE === 'production'
});

export async function load() {
	const photos = await cloudinary.search
		.expression('resource_type:image AND folder=suds-dog-wash')
		.sort_by('uploaded_at', 'desc')
		.execute();

	return photos;
}
