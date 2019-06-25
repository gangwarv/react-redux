import React from 'react'

export default function Cart(props) {
    return (
        <div className="row">
            <div className="col-sm-12">
                <table className="table cart">
                    <thead>
                        <tr>
                            <th>Item</th>
                            <th className="sq"></th>
                            <th className="sq">Quantity</th>
                            <th className="sq"></th>
                            <th className="sq"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.cart.map(item => (<tr key={item._id}>
                            <td>{item.title}</td>
                            <td><input type="button" onClick={_ => props.addToCart({ ...item, bookId:item._id, quantity: -1 })} value="-" /></td>
                            <td>{item.quantity}</td>
                            <td><input type="button" onClick={_ => props.addToCart({ ...item, bookId:item._id, quantity: 1 })} value="+" /></td>
                            <td><input type="button" onClick={_ => props.removeFromCart({ bookId: item._id })} value="x" /></td>
                        </tr>))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
