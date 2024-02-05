<script>
import { routes } from "$lib/store/routes"
</script>

<div class="menuee">
    <a class={ $routes.route === "/help/provably-fair" ? "select" : ''} href="/help/provably-fair">Provably fair</a>
    <a class={ $routes.route === "/help/agreement" ? "select" : ''} href="/help/agreement">User Agreement</a>
    <a class={ $routes.route === "/help/coinlimit" ? "select" : ''}  href="/help/coinlimit">Coin Accuracy Limit</a>
    <a class={ $routes.route === "/help/contactus" ? "select" : ''}  href="/help/contactus">Support</a>
    <a class={ $routes.route === "/help/fee" ? "select" : ''}  href="/help/fee">Fee</a>
    <a class={ $routes.route === "/help/googlecheck" ? "select" : ''}  href="/help/googlecheck">Google Authenticator</a>
    <a class={ $routes.route === "/help/faq" ? "select" : ''}  href="/help/faq">FAQ</a>
    <a class={ $routes.route === "/help/passcurrency" ? "select" : ''}  href="/help/passcurrency">Cryptocurrency</a>
    <a class={ $routes.route === "/help/privacy" ? "select" : ''}  href="/help/privacy">Privacy Policy</a>
    <a  class={ $routes.route === "/help/reglog" ? "select" : ''}  href="/help/reglog">Registration and Login</a>
    <a  class={ $routes.route === "/help/swappolicy" ? "select" : ''}  href="/help/swappolicy">NGSwap Policy</a>
    <a  class={ $routes.route === "/help/terms-service" ? "select" : ''}  href="/help/terms-service">Terms of Service</a>
</div>