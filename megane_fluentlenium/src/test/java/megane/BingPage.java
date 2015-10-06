import org.fluentlenium.core.FluentPage;

/**
 * ログイン画面を表すPage Objectクラス。
 */
public class BingPage extends FluentPage {
    
    @Override
    public String getUrl(){
        return "http://www.bing.com";
    }
    
    public void search(String keyword) {
	    fill("#sb_form_q").with(keyword);
	    submit("#sb_form_go");
    }

}