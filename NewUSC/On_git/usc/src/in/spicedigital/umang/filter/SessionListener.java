package in.spicedigital.umang.filter;
import javax.servlet.http.HttpSessionEvent;
import javax.servlet.http.HttpSessionListener;

public class SessionListener implements HttpSessionListener {

	private int sessionCount = 0;
	@Override
	public void sessionCreated(HttpSessionEvent event) {
		System.out.println("In Session Created");
	        synchronized (this) {
	            sessionCount++;
	        }
	 
	        System.out.println("Session Created: " + event.getSession().getId());
	        System.out.println("Total Sessions: " + sessionCount);
	    }
	@Override
    public void sessionDestroyed(HttpSessionEvent event) {
		System.out.println("In Session Destroyed");
        synchronized (this) {
            sessionCount--;
            System.out.println(event.getSource());
            System.out.println(event.getSession());
            System.out.println(event.getSession().isNew());
        }
        System.out.println("Session Destroyed: " + event.getSession().getId());
        System.out.println("Total Sessions: " + sessionCount);
    }
	   
}