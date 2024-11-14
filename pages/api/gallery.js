// src/pages/api/gallery.js
export default function handler(req, res) {
  const images = [
    '/image/gallery/rc1.jpg',
    '/image/gallery/rc2.jpg',
    '/image/gallery/rc3.jpg',
		'/image/gallery/rc4.jpg',
		'/image/gallery/rc5.jpg',
		'/image/gallery/packed1.jpg',
		'/image/gallery/pc1.jpg',
  ];

  res.status(200).json(images);
}