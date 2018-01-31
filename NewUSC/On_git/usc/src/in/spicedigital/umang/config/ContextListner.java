package in.spicedigital.umang.config;
import javax.servlet.ServletContextEvent;
import javax.servlet.ServletContextListener;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import ch.qos.logback.classic.LoggerContext;

public class ContextListner implements ServletContextListener {
	private final Logger log = LoggerFactory.getLogger(ContextListner.class);

	@Override
	public void contextDestroyed(ServletContextEvent arg0) {
		//closing logger gracefully
		if (LoggerFactory.getILoggerFactory() instanceof LoggerContext) {
            ((LoggerContext) LoggerFactory.getILoggerFactory() ).stop();
        } 
		System.out.println("Logger Closed gracefully");
	}
	

	@Override
	public void contextInitialized(ServletContextEvent arg0) {
		//loading property file at context loading
		log.info("This is the context");
	}
}
