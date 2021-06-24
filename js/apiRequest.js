var BASE_URL = "https://labbay-delivery.uz/logistika/web/"
var IMG_URL = "https://www.labbay-delivery.uz/logistika/admin/"

async function getTariff() {
    let res = await fetch(BASE_URL + 'get_transport.php', {method: "POST"})
    let tariffs = await res.json()
    console.log(tariffs.Response.Items)
    tariffs.Response.Items.forEach((tariff, i) => {
        document.querySelector('.slider_pickup').innerHTML +=
            `<div class="item">
                <div class="slider_slider_block  cars" data-language="uz"
                     data-options='${JSON.stringify(tariff.Tarif)}'
                     data-id=${tariff.Id} data-current=${i}>
                    <div class="for_img_pickup" data-current=${i}>
                        <div class="img_pickup">
                            <img src=${IMG_URL + tariff.rasmi} data-current=${i}>
                                <div class="name_pickup text-center" data-current=${i}>
                                    <p data-current=${i}>${tariff.Name}</p>
                                </div>
                        </div>
                    </div>
                    <!-- Blocks For Send Text pickapp list  -->
                    <div class="text_list_for_pic" style="display: none;">
                        <p>${tariff.izox}</p>
                    </div>
                    <!-- Price number Tarif -->
                    <span style="display: none;" class="price_tarifff">10000</span>
                    <span style="display: none;" class="default_price">5000</span>
                    <span style="display: none;" class="default_distance">2</span>
                </div>
            </div>
            `
    })
}

getTariff();