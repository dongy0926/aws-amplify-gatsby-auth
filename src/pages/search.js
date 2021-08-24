import { Component } from "react"
class search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            display1: 'none',
            display2: 'none'
        }
        this.resultList = this.resultList.bind(this)
        this.editWord = this.editWord.bind(this)
    };

    resultList() {
        this.setState(prevState => ({
            display1: 'block'
        }))
    };
    editWord() {
        this.setState(prevState => ({
            display2: 'block'
        }))
    };
    render() {
        return (
            <div class="search_main">
                <div class="search1">
                    <h1>YOHJI YAMAMOTO様</h1>
                    <table>
                        <tr>
                            <td rowspan="2">
                                <label>広告媒体</label>
                            </td>
                            <td rowspan="2">
                                <input type="text" />
                            </td>
                            <td rowspan="2">
                                <label>開始日</label>
                            </td>
                            <td rowspan="2">
                                <input type="date" />
                            </td>
                            <td rowspan="2">
                                <label>終了日</label>
                            </td>
                            <td rowspan="2">
                                <input type="date" />
                            </td>
                            <td>
                                <input type="button" class="search_button1_css" onClick={this.editWord} value="検索語編集" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input type="button" class="search_button2_css" onClick={this.resultList} value="プレビュー" />
                            </td>
                        </tr>
                    </table>
                </div>
                <div class="search2" style={{ display: this.state.display1 }}>
                    <div class="div_css">
                        <h2 class="label_css">プレビュー</h2>
                        <input type="button" value="スプレッドシート出力" class="search_button3_css" />
                        <input type="button" value="CSV出力" class="search_button3_css" />
                    </div>
                    <div class="div_css1">
                        <table class="border_css" border="1px">
                            <tr>
                                <td>検索語</td>
                                <td>広告媒体</td>
                                <td>広告文</td>
                                <td>広告先リンク</td>
                                <td>広告画像リンク</td>
                                <td>確認日</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>

                        </table>
                    </div>
                </div>
                <div class="search3" style={{ display: this.state.display2 }}>
                    <div class="head_css">
                        <h1>検索語 編集</h1>
                        <input type="button" class="search_button4_css" value="追加" />
                    </div>
                    <div class="con">
                        <table border="1px">
                            <tr>
                                <td colSpan="2">検索語</td>
                            </tr>
                            <tr>
                                <td>YOHJI YAMAMOTO</td>
                                <td><input type="button" value="削除" /></td>
                            </tr>
                            <tr>
                                <td>YOHJI YAMAMOTO　通販</td>
                                <td><input type="button" value="削除" /></td>
                            </tr>
                            <tr>
                                <td>YOHJI YAMAMOTO　マスク</td>
                                <td><input type="button" value="削除" /></td>
                            </tr>
                            <tr>
                                <td>YOHJI YAMAMOTO　Tシャツ</td>
                                <td><input type="button" value="削除" /></td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        )
    }

}
export default search;