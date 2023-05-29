import { MetalOptions } from './MetalOptions.js'
import { saveOrder } from './SaveOrder.js'
import { Orders } from './ShowOrders.js'
import { SizeOptions } from './SizeOptions.js'
import { StyleOptions } from './StyleOptions.js'


const render = async () => {
    const metalOptionsHTML = await MetalOptions()
    const styleOptionsHTML = await StyleOptions()
    const sizeOptionsHTML = await SizeOptions()
    const buttonHTML = await saveOrder()
    const ordersHTML = await Orders()

    const composedHTML = `
        <h1></h1>

        <article class="choices">
            <section class="choices--column list choices__metals options">
                <h2>Metals</h2>
                ${metalOptionsHTML}
            </section>

            <section class="choices--column list choices__sizes options">
                <h2>Sizes</h2>
                ${sizeOptionsHTML}
            </section>

            <section class="choices--column list choices__styles options">
                <h2>Styles</h2>
                ${styleOptionsHTML}
            </section>
        </article>

        <article class="order">
        <h2></h2>
        ${buttonHTML}

        </article>

        <article class="customOrders">
            <h2>Custom Jewelry Orders</h2>
            ${ordersHTML}

        </article>
    `

    container.innerHTML = composedHTML

    //Custom Event Listener

}
document.addEventListener("newOrderCreated", render)

render()
