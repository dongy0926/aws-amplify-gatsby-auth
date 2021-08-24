
export default function login() {
    return (
        <div class="login_main3">
            <h1 className="title">
            ヨウジヤマモト様
            </h1>
            <table class="login_main4">
                <tr>
                    <td>
                    <label for="stard" class="text-md-right ">開始日</label>
                    <input id="stard" class="login_input1 ml-1" name="stard" required autofocus></input>
                    </td>
                    <td class="pl-5">
                    <label for="end" class="text-md-right">終了日</label>
                    <input id="end" class="login_input1 ml-1" name="end" required></input>
                    </td>
                </tr>
            </table>
            <p><input type="submit" value="帳票出力" class="text-md-right button-color1"></input></p>
            <p><label class="ml-3 mt-6 font-3">※エクセル出力・スプシ出力を選択出来る様にする。</label></p>
        </div>
    )
  }