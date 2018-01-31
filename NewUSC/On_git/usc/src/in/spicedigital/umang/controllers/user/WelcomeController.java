package in.spicedigital.umang.controllers.user;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
@RequestMapping(value ="/user")
public class WelcomeController {

	
	@RequestMapping(value ="/home", method = RequestMethod.GET)
	public String homePage(ModelMap model) {
		model.addAttribute("username", "Hello, User");
		return "welcome";
	}
}