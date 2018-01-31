package in.spicedigital.umang.utility;
public class OsType {
	 
	private static String osName = System.getProperty("os.name").toLowerCase();
 
	public static boolean isWindows() {
 
		return (osName.indexOf("win") >= 0);
 
	}
 
	public static boolean isMac() {
 
		return (osName.indexOf("mac") >= 0);
 
	}
 
	public static boolean isUnix() {
 
		return (osName.indexOf("nix") >= 0 || osName.indexOf("nux") >= 0 || osName.indexOf("aix") > 0 );
 
	}
 
	public static boolean isSolaris() {
 
		return (osName.indexOf("sunos") >= 0);
 
	} 
}