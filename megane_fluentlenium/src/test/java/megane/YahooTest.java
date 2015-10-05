import org.junit.Test;

import static org.assertj.core.api.Assertions.assertThat;

import org.fluentlenium.adapter.FluentTest;

public class YahooTest extends FluentTest {
    @Test
    public void 条件を入力して検索すると検索結果画面のタイトルは条件を含む() {
        //検索条件を入力して検索
        goTo("http://www.yahoo.co.jp");
        fill("#srchtxt").with("Qiita");
        click("#srchbtn");

        //タイトルは検索結果を含むこと
        assertThat(title()).contains("Qiita");
    }
}