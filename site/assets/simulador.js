document.addEventListener("DOMContentLoaded", function() {
        const rangeTotens = document.getElementById("pc-range-totens");
        const rangeAds = document.getElementById("pc-range-ads");
        const rangePrice = document.getElementById("pc-range-price");
        const valTotens = document.getElementById("pc-val-totens");
        const valAds = document.getElementById("pc-val-ads");
        const valPrice = document.getElementById("pc-val-price");
        const resLiquido = document.getElementById("pc-resultado-liquido");
        const subReceita = document.getElementById("pc-sub-receita");
        const subDeducoes = document.getElementById("pc-sub-deducoes");
        const tbReceita = document.getElementById("pc-tb-receita");
        const tbRoyalties = document.getElementById("pc-tb-royalties");
        const qtdTotensRoyalty = document.getElementById("pc-qtd-totens-royalty");
        const CUSTO_MEI = 87.00;
        const CUSTO_ROYALTY_TOTEM = 399.00;
        function formatMoney(value) {
            return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
        }
        function calcularSimulacao() {
            const totens = parseInt(rangeTotens.value);
            const ads = parseInt(rangeAds.value);
            const price = parseFloat(rangePrice.value);
            valTotens.innerText = totens + (totens === 1 ? " totem" : " totens");
            valAds.innerText = ads + (ads === 1 ? " anúncio" : " anúncios");
            valPrice.innerText = formatMoney(price);
            const receitaBruta = totens * ads * price;
            const royaltiesTotais = totens * CUSTO_ROYALTY_TOTEM;
            const deducoesTotais = CUSTO_MEI + royaltiesTotais;
            const resultadoLiquido = receitaBruta - deducoesTotais;
            resLiquido.innerText = formatMoney(resultadoLiquido);
            subReceita.innerText = formatMoney(receitaBruta);
            subDeducoes.innerText = "- " + formatMoney(deducoesTotais);
            tbReceita.innerText = formatMoney(receitaBruta);
            qtdTotensRoyalty.innerText = totens;
            tbRoyalties.innerText = "- " + formatMoney(royaltiesTotais);
        }
        rangeTotens.addEventListener("input", calcularSimulacao);
        rangeAds.addEventListener("input", calcularSimulacao);
        rangePrice.addEventListener("input", calcularSimulacao);
        calcularSimulacao();
    });
