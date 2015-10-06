import org.junit.Test;

import static org.assertj.core.api.Assertions.assertThat;

import org.fluentlenium.adapter.FluentTest;

import org.fluentlenium.core.annotation.Page;

public class BingTest extends FluentTest {
    @Page
    public BingPage page;
    
    @Test
    public void title_of_bing_should_contain_search_query_name() {
        goTo(page);
        page.search("FluentLenium");
        assertThat(title()).contains("FluentLenium");
    }
}