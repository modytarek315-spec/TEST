import re

def replace_in_file(filepath, search_pattern, replace_pattern):
    with open(filepath, 'r') as f:
        content = f.read()

    new_content = re.sub(search_pattern, replace_pattern, content, flags=re.DOTALL)

    with open(filepath, 'w') as f:
        f.write(new_content)

search_for = r"""              <h3 style="margin: 0 0 15px 0;">Order Summary</h3>
              \${cartItems.map\(item => `
                <div class="summary-row">
                  <span>\${item.product.name} x \${item.quantity}</span>
                  <span>$\${\(item.product.price \* item.quantity\).toFixed\(2\)}</span>
                </div>
              `\).join\(''\)}
              <div class="summary-row">
                <span>Subtotal:</span>
                <span>$\${subtotal.toFixed\(2\)}</span>
              </div>
              <div class="summary-row">
                <span>Tax \(14%\):</span>
                <span>$\${tax.toFixed\(2\)}</span>
              </div>
              <div class="summary-row total">
                <span>Total:</span>
                <span>$\${total.toFixed\(2\)}</span>
              </div>"""

replace_with = r"""              <h3 style="margin: 0 0 15px 0;">Order Summary</h3>
              ${cartItems.map(item => `
                <div class="summary-row">
                  <span>${item.product.name} x ${item.quantity}</span>
                  <span>${(item.product.price * item.quantity).toFixed(2)} <span class="currency-symbol">EGP</span></span>
                </div>
              `).join('')}
              <div class="summary-row">
                <span>Subtotal:</span>
                <span>${subtotal.toFixed(2)} <span class="currency-symbol">EGP</span></span>
              </div>
              <div class="summary-row">
                <span>Tax (14%):</span>
                <span>${tax.toFixed(2)} <span class="currency-symbol">EGP</span></span>
              </div>
              <div class="summary-row total">
                <span>Total:</span>
                <span>${total.toFixed(2)} <span class="currency-symbol">EGP</span></span>
              </div>"""

replace_in_file('index.html', search_for, replace_with)
