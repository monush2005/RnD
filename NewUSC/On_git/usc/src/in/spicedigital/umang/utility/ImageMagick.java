//package in.spicedigital.umang.utility;
//
//import java.awt.Graphics2D;
//import java.awt.RenderingHints;
//import java.awt.Transparency;
//import java.awt.image.BufferedImage;
//import java.io.ByteArrayInputStream;
//import java.io.File;
//import java.io.IOException;
//import java.io.InputStream;
//
//import javax.imageio.ImageIO;
//
//public class ImageMagick {
//
//	/*
//	 * public static void main(String[] args) {
//	 * ImageMagick.writeImage(1440,358); ImageMagick.writeImage(1080,268);
//	 * ImageMagick.writeImage(750,186); ImageMagick.writeImage(720,179);
//	 * ImageMagick.writeImage(640,159); ImageMagick.writeImage(540,134);
//	 * ImageMagick.writeImage(480,119); }
//	 * 
//	 * 
//	 * public static void writeImage(int WIDTH,int HEIGHT) { BufferedImage
//	 * image=null; ByteArrayInputStream bis=null; try { File file = new
//	 * File("C:\\Users\\ch-e01103\\Documents\\i_phone\\banner1eng1600.png");
//	 * FileInputStream fis = new FileInputStream(file); ByteArrayOutputStream
//	 * bos = new ByteArrayOutputStream(); byte[] buf = new byte[1024]; try { for
//	 * (int readNum; (readNum = fis.read(buf)) != -1;) { bos.write(buf, 0,
//	 * readNum); //no doubt here is 0 } } catch (IOException ex) {
//	 * ex.printStackTrace(); } byte[] bytes = bos.toByteArray(); byte[]
//	 * imageByte = bytes; bis = new ByteArrayInputStream(imageByte); image =
//	 * ImageIO.read(bis); int type = image.getType() == 0 ?
//	 * BufferedImage.SCALE_SMOOTH : image.getType(); BufferedImage
//	 * resizeImageJpg = resizeImage(image, type,WIDTH,HEIGHT);
//	 * ImageIO.write(resizeImageJpg, "png", new
//	 * File("C:\\Users\\ch-e01103\\Documents\\i_phone\\"+WIDTH+".png")); } catch
//	 * (IOException e) { e.printStackTrace(); } }
//	 * 
//	 * private static BufferedImage resizeImage(BufferedImage originalImage, int
//	 * type,int WIDTH,int HEIGHT) { BufferedImage resizedImage = new
//	 * BufferedImage(WIDTH, HEIGHT, type); Graphics2D g =
//	 * resizedImage.createGraphics(); g.drawImage(originalImage, 0, 0, WIDTH,
//	 * HEIGHT, null); g.dispose(); return resizedImage; }
//	 */
//	
//	
//	public static void main(String[] args) {
//
//		BufferedImage requestImage=null;
//		try{
//			requestImage=ImageIO.read(new File("C:\\Users\\ch-e01103\\Documents\\i_phone\\Webp.net-resizeimage.png"));			
//		}catch(Exception e){
//			e.printStackTrace();
//		}
//
///*		byte[] imageInByte=null;
//		InputStream in = new ByteArrayInputStream(imageInByte);
//		try {
//			BufferedImage bImageFromConvert = ImageIO.read(in);
//		} catch (IOException e1) {
//			e1.printStackTrace();
//		}*/
//		
//		BufferedImage responseImage1 = ImageMagick.getScaledInstance(requestImage,1440,358,new Object(),true);
//		BufferedImage responseImage2 = ImageMagick.getScaledInstance(requestImage,1080,268,new Object(),true);
//		BufferedImage responseImage3 = ImageMagick.getScaledInstance(requestImage,750,186,new Object(),true);
//		BufferedImage responseImage4 = ImageMagick.getScaledInstance(requestImage,720,179,new Object(),true);
//		BufferedImage responseImage5 = ImageMagick.getScaledInstance(requestImage,640,159,new Object(),true);
//		BufferedImage responseImage6 = ImageMagick.getScaledInstance(requestImage,540,134,new Object(),true);
//		BufferedImage responseImage7 = ImageMagick.getScaledInstance(requestImage,480,119,new Object(),true);
//		File outputfile1 = new File("C:\\Users\\ch-e01103\\Documents\\i_phone\\1440.png");
//		File outputfile2 = new File("C:\\Users\\ch-e01103\\Documents\\i_phone\\1080.png");
//		File outputfile3 = new File("C:\\Users\\ch-e01103\\Documents\\i_phone\\750.png");
//		File outputfile4 = new File("C:\\Users\\ch-e01103\\Documents\\i_phone\\720.png");
//		File outputfile5 = new File("C:\\Users\\ch-e01103\\Documents\\i_phone\\640.png");
//		File outputfile6 = new File("C:\\Users\\ch-e01103\\Documents\\i_phone\\540.png");
//		File outputfile7 = new File("C:\\Users\\ch-e01103\\Documents\\i_phone\\480.png");
//	    try {
//			ImageIO.write(responseImage1, "png", outputfile1);
//			ImageIO.write(responseImage2, "png", outputfile2);
//			ImageIO.write(responseImage3, "png", outputfile3);
//			ImageIO.write(responseImage4, "png", outputfile4);
//			ImageIO.write(responseImage5, "png", outputfile5);
//			ImageIO.write(responseImage6, "png", outputfile6);
//			ImageIO.write(responseImage7, "png", outputfile7);
//		} catch (IOException e) {
//			e.printStackTrace();
//		}
//	    
//	}
//
//	public static BufferedImage getScaledInstance(BufferedImage img, int targetWidth, int targetHeight, Object hint,
//			boolean higherQuality) {
//		int type = (img.getTransparency() == Transparency.OPAQUE) ? BufferedImage.TYPE_INT_RGB: BufferedImage.TYPE_INT_ARGB;
//		BufferedImage ret = (BufferedImage) img;
//		int w, h;
//		if (higherQuality) {
//			// Use multi-step technique: start with original size, then
//			// scale down in multiple passes with drawImage()
//			// until the target size is reached
//			w = img.getWidth();
//			h = img.getHeight();
//		} else {
//			// Use one-step technique: scale directly from original
//			// size to target size with a single drawImage() call
//			w = targetWidth;
//			h = targetHeight;
//		}
//
//		do {
//			if (higherQuality && w > targetWidth) {
//				w /= 2;
//				if (w < targetWidth) {
//					w = targetWidth;
//				}
//			}
//
//			if (higherQuality && h > targetHeight) {
//				h /= 2;
//				if (h < targetHeight) {
//					h = targetHeight;
//				}
//			}
//
//			BufferedImage tmp = new BufferedImage(w, h, type);
//			Graphics2D g2 = tmp.createGraphics();
//			g2.setRenderingHint(RenderingHints.KEY_RENDERING, RenderingHints.VALUE_RENDER_QUALITY);
//			g2.setRenderingHint(RenderingHints.KEY_TEXT_ANTIALIASING, RenderingHints.VALUE_TEXT_ANTIALIAS_LCD_HRGB);
//			g2.setRenderingHint(RenderingHints.KEY_COLOR_RENDERING, RenderingHints.VALUE_COLOR_RENDER_QUALITY);
//			g2.drawImage(ret, 0, 0, w, h, null);
//			g2.dispose();
//
//			ret = tmp;
//		} while (w != targetWidth || h != targetHeight);
//
//		return ret;
//	}
//
//}