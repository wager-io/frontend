<script>
let limits = [
    {coin_name:"BTC", limits: "0.000000001"},
    {coin_name:"ETH", limits: "0.000000001"},
    {coin_name:"WGD", limits: "0.000000001"},
    {coin_name:"WGF", limits: "0.000000001"},
]

</script>

<div class="sc-hcupDf fkQdDC">
    <div class="item">
        <h2>Coin accuracy limit</h2>
        <p>
            Due to the limitation of data storage accuracy, changes in the amount less
            than a certain amount will not take effect. The minimum accuracy of most
            coins is consistent with the currency accuracy of the blockchain. For
            example, the minimum unit of SATS is 1. The minimum data storage accuracy of
            each coin is shown in the following table:
        </p>
    </div>
    <div class="item">
        <table class="sc-gWXbKe iUeetX table sc-hLVXRe dGuDeP is-stripe">
            <thead>
                <tr>
                    <th><span>Currency</span></th>
                    <th><span>Accuracy Limit</span></th>
                </tr>
            </thead>
            <tbody>
                {#each limits as limit }
                    <tr>
                        <td><span>{limit.coin_name}</span></td>
                        <td><span>{limit.limits}</span></td>
                    </tr>
                {/each}
         
            </tbody>
        </table>
    </div>
</div>

<style>

</style>
