package in.spicedigital.umang.config;

import java.util.Properties;

import org.springframework.beans.BeansException;
import org.springframework.context.ApplicationContext;

import in.spicedigital.umang.dto.constants.BeansNameConstants;

public class AppContext {

	private static ApplicationContext context;

	public static ApplicationContext getContext() {
		return context;
	}

	public static void setContext(ApplicationContext context) throws BeansException {
		AppContext.context = context;
		PropertyConfiguration.setConfiguration((Properties) AppContext.getContext().getBean(BeansNameConstants.WS_URL_PROPERTY_FILE));
	}
}
