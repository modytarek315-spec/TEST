import re

def replace_in_file(filepath, search_pattern, replace_pattern):
    with open(filepath, 'r') as f:
        content = f.read()

    new_content = re.sub(search_pattern, replace_pattern, content, flags=re.DOTALL)

    with open(filepath, 'w') as f:
        f.write(new_content)

search_for = r"""        function updateServiceTotal\(\) {
            const pkg = servicePackages\[selectedService\];
            const partsCost = selectedParts.reduce\(\(sum, part\) => sum \+ part.price, 0\);
            const total = pkg.price \+ partsCost;

            const partsCostRow = document.getElementById\('parts-cost-row'\);
            const partsCostSpan = document.getElementById\('parts-cost'\);
            const totalCostSpan = document.getElementById\('total-cost'\);

            if \(partsCost > 0\) {
                partsCostRow.style.display = 'flex';
                partsCostSpan.innerHTML = `\${partsCost.toFixed\(2\)} <span class="currency-symbol">EGP</span>`;
            } else {
                partsCostRow.style.display = 'none';
            }

            totalCostSpan.innerHTML = `\${total.toFixed\(2\)} <span class="currency-symbol">EGP</span>`;
        }"""

replace_with = r"""        function updateServiceTotal() {
            const pkg = servicePackages[selectedService];
            const partsCost = selectedParts.reduce((sum, part) => sum + part.price, 0);
            const subtotal = pkg.price + partsCost;
            const tax = subtotal * 0.14;
            const total = subtotal + tax;

            const partsCostRow = document.getElementById('parts-cost-row');
            const partsCostSpan = document.getElementById('parts-cost');
            const subtotalCostSpan = document.getElementById('subtotal-cost');
            const taxCostSpan = document.getElementById('tax-cost');
            const totalCostSpan = document.getElementById('total-cost');

            if (partsCost > 0) {
                partsCostRow.style.display = 'flex';
                partsCostSpan.innerHTML = `${partsCost.toFixed(2)} <span class="currency-symbol">EGP</span>`;
            } else {
                partsCostRow.style.display = 'none';
            }

            subtotalCostSpan.innerHTML = `${subtotal.toFixed(2)} <span class="currency-symbol">EGP</span>`;
            taxCostSpan.innerHTML = `${tax.toFixed(2)} <span class="currency-symbol">EGP</span>`;
            totalCostSpan.innerHTML = `${total.toFixed(2)} <span class="currency-symbol">EGP</span>`;
        }"""

replace_in_file('index.html', search_for, replace_with)
