
export default function login() {
    return (
        <div class="login_main1">
            <h1 className="title">
            アドクロウト　商標パトローラー
            </h1>
            <table class="login_main2 Table">
                <tr>
                    <td>
                    <label for="email" class="text-md-right">ID</label>
                    </td>
                    <td>
                    <input id="email" type="email" class="login_input1" name="email" required autofocus></input>
                    </td>
                </tr>
                <tr>
                    <td>
                    <label for="password" class="text-md-right">PW</label>
                    </td>
                    <td>
                    <input id="password" type="password" class="login_input1" name="password" required></input>
                    </td>
                </tr>
            </table>
            
            <p><input type="submit" value="ログイン画面" class="text-md-right button-color"></input></p>
        </div>
    )
  }