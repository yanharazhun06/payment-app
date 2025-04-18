export type OrderT = {
    number: number,
    header: string,
    descr: string,
    order_list: OrderItemT[],
}

export interface OrderItemT {
    id: string | number,
    groupId: string | number,
    name: string,
    count: number,
    descr: string,
    price: number,
};

const orderList: OrderItemT[] = [
    {
        id: 1,
        groupId: 281,
        name: "Lamel Professional Smart Skin Compact Powder",
        count: 1,
        descr: "Пудра для лиця",
        price: 240.99,
    },
    {
        id: 2,
        groupId: 567,
        name: "Lancome L`Absolu Mademoiselle Shine",
        count: 3,
        descr: "Помада",
        price: 39
    },
    {
        id: 3,
        groupId: 23,
        name: "IUNIK Calendula Complete Cleansing Oil",
        count: 2,
        descr: "Засіб для зняття макіяжу",
        price: 20
    },
]

export const order: OrderT = {
    number: 1299,
    header: "Order for Premium Subscription including 3 months of additional features, extended support, and exclusive offers for valued customers with personalized settings",
    descr: "This order includes a comprehensive package of premium features, including access to exclusive content, personalized support, and advanced tools for an enhanced user experience throughout the subscription period.",
    order_list: orderList
}