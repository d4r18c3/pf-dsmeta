import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import NotificationButton from '../NotificationButton'
import './styles.css'

function SalesCard() {
    return (
        <>
            <div className="sf-card">

                <h2 className="sf-sales-title">Vendas</h2>
                <div>
                    <div className="sf-form-control-container">
                        <DatePicker
                            selected={new Date()}
                            onChange={(date: Date) => { }}
                            className="sf-form-control"
                            dateFormat="dd/MM/yyyy"
                        />
                    </div>
                    <div className="sf-form-control-container">
                        <DatePicker
                            selected={new Date()}
                            onChange={(date: Date) => { }}
                            className="sf-form-control"
                            dateFormat="dd/MM/yyyy"
                        />
                    </div>
                </div>

                <div>
                    <table className="sf-table-control">
                        <thead>
                            <tr>
                                <th className="show992">ID</th>
                                <th className="show576">Data</th>
                                <th className="show992">Visitas</th>
                                <th className="show992">Vendas</th>
                                <th>Vendedor</th>
                                <th>Total</th>
                                <th>Notificação</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="show992">ID</td>
                                <td className="show576">08/07/20</td>
                                <td className="show992">Visitas</td>
                                <td className="show992">Vendas</td>
                                <td>Matheus</td>
                                <td>R$ 55.300,00</td>
                                <td>
                                    <div className="sf-red-btn-container">
                                        <NotificationButton />

                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="show992">ID</td>
                                <td className="show576">08/07/20</td>
                                <td className="show992">Visitas</td>
                                <td className="show992">Vendas</td>
                                <td>Matheus</td>
                                <td>R$ 55.300,00</td>
                                <td>
                                    <div className="sf-red-btn-container">
                                        <NotificationButton />

                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="show992">ID</td>
                                <td className="show576">08/07/20</td>
                                <td className="show992">Visitas</td>
                                <td className="show992">Vendas</td>
                                <td>Matheus</td>
                                <td>R$ 55.300,00</td>
                                <td>
                                    <div className="sf-red-btn-container">
                                        <NotificationButton />

                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>


            </div>
        </>
    )
}

export default SalesCard
