"use strict";
import React, { Component } from "react";
import { database } from "../../firebase";

export default class Events extends Component {
  constructor(props) {
    super(props);
    this.state = {
      HTML: ``,
      HTMLSplit: ``,
      JSX: ""
    };
    this.renderHTML = this.renderHTML.bind(this);
  }

  componentDidMount() {
    let promise = new Promise((resolve, reject) => {
      let value;
      database
        .ref("events/")
        .once("value")
        .then(function(snapshot) {
          value = snapshot.val();
          resolve(value);
        });
    });
    promise.then(value => {
      let stringHTML = "" + value.HTML;
      this.setState({
        HTML: stringHTML
      });
    });

    this.state.HTMLSplit = this.state.HTML.split(" ");
    // for (let i = 0; i < this.state.HTML.length; i++) {

    // }
  }

  renderHTML(html) {
    return html;
  }

  render() {
    let HTML = this.state.HTML;
    const styles = {
      height: this.props.height,
      width: this.props.width
    };
    return (
      <section id="events" style={styles}>
        <div id="event-headline">
          <h1 onMouseEnter={this.showEvent}>Where can I see Hardy Brooklyn?</h1>
        </div>
        <div id="bpt_eventbody">
          <div className="bpt_ticket_widget">
            <form
              action="https://www.brownpapertickets.com/addtocart/3235059"
              method="POST"
            >
              <input type="hidden" name="event_id" value="3235059" />
              <table cellPadding="0" cellSpacing="0" border="0" width="100%">
                <tbody>
                  <tr>
                    <td className="bpt_widget_box_top">
                      <table cellPadding="0" cellSpacing="0" border="0">
                        <tbody>
                          <tr>
                            <td className="bpt_widget_box_tab">Get Tickets</td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                  <tr>
                    <td className="bpt_widget_box_body">
                      <div className="bpt_widget_event_name">
                        Hardy Brooklyn and Solas Studio Present Indulge with
                        Artist Adrian Bermeo
                      </div>
                      <input
                        type="hidden"
                        name="date_id"
                        id="bpt_date_list"
                        value="1839779"
                      />
                      <table
                        width="100%"
                        cellPadding="0"
                        cellSpacing="0"
                        border="0"
                      >
                        <tbody>
                          <tr>
                            <td valign="TOP" width="200px">
                              <table
                                width="100%"
                                cellSpacing="0"
                                cellPadding="0"
                                border="0"
                                className="bpt_widget_price_table"
                              >
                                <tbody>
                                  <tr>
                                    <td
                                      className="bpt_widget_date_price_titles"
                                      height="20px"
                                    >
                                      Date
                                    </td>
                                  </tr>
                                  <tr>
                                    <td
                                      valign="CENTER"
                                      className="bpt_widget_date"
                                    >
                                      <b>Feb 27, 2018 6:00 PM</b>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                            <td valign="TOP">
                              <div style={{ width: "100%", padding: " 0px" }}>
                                <div
                                  name="bpt_widget_date"
                                  id="bpt_date_1839779"
                                  className="bpt_widget_price_block_first"
                                >
                                  <div
                                    name="bpt_widget_date_waiting"
                                    id="bpt_date_waiting_1839779"
                                    className="bpt_widget_date_waiting"
                                  >
                                    <br />
                                    <br />
                                    <br />
                                    <img src="https://www.brownpapertickets.com/g/6/BPT_loading.gif" />
                                  </div>
                                  <div
                                    name="bpt_widget_date_prices"
                                    id="bpt_date_prices_1839779"
                                  >
                                    <table
                                      width="100%"
                                      cellSpacing="0"
                                      cellPadding="0"
                                      border="0"
                                      className="bpt_widget_price_table"
                                    >
                                      <tbody>
                                        <tr>
                                          <td
                                            nowrap=""
                                            className="bpt_widget_date_price_titles"
                                            height="20px"
                                          >
                                            Admission Level
                                          </td>
                                          <td
                                            className="bpt_widget_date_price_titles"
                                            height="20px"
                                          >
                                            Price
                                          </td>
                                          <td
                                            className="bpt_widget_date_price_titles"
                                            align="CENTER"
                                            height="20px"
                                          >
                                            Quantity
                                          </td>
                                        </tr>
                                        <tr>
                                          <td valign="CENTER">
                                            <b>Art Enthusiast </b>
                                          </td>
                                          <td valign="CENTER">
                                            $30.00 ($32.04 w/service fee)
                                          </td>
                                          <td valign="CENTER" align="RIGHT">
                                            <select
                                              name="price_5947057"
                                              className="bpt_widget_input"
                                            >
                                              <option value="0">0</option>
                                              <option value="1">1</option>
                                              <option value="2">2</option>
                                              <option value="3">3</option>
                                              <option value="4">4</option>
                                            </select>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td
                                            className="bpt_widget_price_description"
                                            colSpan="2"
                                          >
                                            $30.00 includes one print (up to
                                            11"x 17"; photo must be taken at
                                            event)
                                          </td>
                                          <td className="bpt_widget_price_description">
                                            &nbsp;
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr />
                          <tr>
                            <td>&nbsp;</td>
                            <td>
                              <table
                                width="100%"
                                cellSpacing="0"
                                border="0"
                                className="bpt_widget_price_table"
                              >
                                <tbody>
                                  <tr>
                                    <td
                                      nowrap=""
                                      className="bpt_widget_hidden_price_border"
                                    >
                                      <div
                                        id="bpt_discount_option_link"
                                        style={{ display: "inline" }}
                                      >
                                        <a
                                          href="#"
                                          onClick="bptShowDiscountBox(); return false;"
                                          className="bpt_widget_a"
                                        >
                                          Enter a Password or Discount Code
                                        </a>
                                      </div>
                                      <div
                                        id="bpt_discount_option_box"
                                        style={{ display: "none" }}
                                      >
                                        <div
                                          id="bpt_discount_spinner"
                                          style={{
                                            display: "none",
                                            width: " 100%"
                                          }}
                                        >
                                          <table width="100%">
                                            <tbody>
                                              <tr>
                                                <td align="CENTER">
                                                  <img src="/g/6/BPT_loading.gif" />
                                                </td>
                                              </tr>
                                            </tbody>
                                          </table>
                                        </div>
                                        <div
                                          id="bpt_discount_results_message"
                                          style={{ display: "none" }}
                                        />
                                        <table
                                          cellPadding="0"
                                          cellSpacing="0"
                                          border="0"
                                          style={{ margin: "0px" }}
                                        >
                                          <tbody>
                                            <tr>
                                              <td nowrap="">
                                                Password or Discount Code:
                                              </td>
                                              <td nowrap="">
                                                <input
                                                  type="text"
                                                  name="discount"
                                                  id="bpt_discount"
                                                  value=""
                                                  className="bpt_widget_input"
                                                />
                                              </td>
                                            </tr>
                                            <tr>
                                              <td>&nbsp;</td>
                                              <td>
                                                <input
                                                  type="hidden"
                                                  name="show_widget"
                                                  value="1"
                                                />
                                                <input
                                                  type="submit"
                                                  name="bpt_show_discount"
                                                  value="Show Available Tickets"
                                                  onClick="document.getElementById('bpt_discount_spinner').style.display = 'block'; document.getElementById('bpt_discount_results_message').style.display = 'none';"
                                                  className="bpt_widget_input"
                                                />
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                      </div>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <table
                                width="100%"
                                cellSpacing="0"
                                cellPadding="0"
                                border="0"
                                className="bpt_widget_price_table"
                              >
                                <tbody>
                                  <tr>
                                    <td valign="CENTER" nowrap="">
                                      <div className="bpt_widget_widget_delivery_title">
                                        Delivery
                                      </div>
                                    </td>
                                  </tr>{" "}
                                  <tr>
                                    <td valign="CENTER">
                                      <div
                                        style={{ float: "left" }}
                                        id="bpt_delivery_title"
                                      >
                                        (<span id="bpt_current_country_name">
                                          United States
                                        </span>{" "}
                                        -{" "}
                                        <a
                                          href="https://www.brownpapertickets.com/event/3235059?change_country=1&amp;show_widget=1"
                                          className="bpt_widget_small_a"
                                        >
                                          Change Country
                                        </a>)
                                      </div>
                                      <input
                                        type="hidden"
                                        name="country_id"
                                        id="country_id"
                                        value="228"
                                      />
                                    </td>
                                  </tr>{" "}
                                  <tr>
                                    <td valign="CENTER">
                                      <div id="bpt_shippingoptions">
                                        <div
                                          id="bpt_shipping_divs_1839779"
                                          style={{
                                            position: "relative",
                                            display: "inline"
                                          }}
                                        >
                                          <select
                                            id="shipping_select_1839779"
                                            name="shipping_1839779"
                                            className="bpt_input"
                                          >
                                            <option value="4">
                                              Will-Call (No additional fee!)
                                            </option>
                                            <option value="1" disabled="">
                                              Physical Tickets - USPS 1st Class
                                              (No additional fee!)
                                            </option>
                                            <option value="2" disabled="">
                                              Physical Tickets - USPS Priority
                                              Mail ($6.55)
                                            </option>
                                            <option value="3" disabled="">
                                              Physical Tickets - USPS Express
                                              Mail ($21.98)
                                            </option>
                                          </select>
                                        </div>
                                      </div>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>{" "}
                  <tr>
                    <td className="bpt_widget_box_bottom">
                      <table width="100%">
                        <tbody>
                          <tr>
                            <td nowrap="">
                              <table cellPadding="0" cellSpacing="0" border="0">
                                <tbody>
                                  <tr>
                                    <td valign="CENTER" nowrap="">
                                      <b>Powered by</b>&nbsp;&nbsp;
                                    </td>
                                    <td>
                                      <a
                                        href="https://www.brownpapertickets.com"
                                        className="BPT_plain"
                                      >
                                        <img
                                          src="https://www.brownpapertickets.com/g/6/BPT_widget_logo.png"
                                          width="131px"
                                          height="32px"
                                          border="0"
                                        />
                                      </a>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                            <td>&nbsp;</td>
                            <td align="RIGHT">
                              <table>
                                <tbody>
                                  <tr>
                                    <td valign="BOTTOM">
                                      <table
                                        cellPadding="0"
                                        cellSpacing="0"
                                        border="0"
                                        className="paymentoptions"
                                      >
                                        <tbody>
                                          <tr>
                                            <td>
                                              <img
                                                src="https://www.brownpapertickets.com/g/6/visa_icon.png"
                                                height="11px"
                                                width="31px"
                                              />
                                            </td>
                                            <td>
                                              <img
                                                src="https://www.brownpapertickets.com/g/6/mc_icon.png"
                                                height="23px"
                                                width="37px"
                                              />
                                            </td>
                                            <td>
                                              <img
                                                src="https://www.brownpapertickets.com/g/6/discover_icon.png"
                                                height="20px"
                                                width="35px"
                                              />
                                            </td>
                                            <td>
                                              <img
                                                src="https://www.brownpapertickets.com/g/6/amex_icon.png"
                                                height="17px"
                                                width="54px"
                                              />
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                    <td>&nbsp;</td>
                                    <td>
                                      <div className="bpt_preloaded_images">
                                        <img src="https://www.brownpapertickets.com/g/6/BPT_button_bottom_rollover.png" />
                                      </div>
                                      <table
                                        cellPadding="0"
                                        cellSpacing="0"
                                        border="0"
                                      >
                                        <tbody>
                                          <tr>
                                            <td nowrap="">
                                              <button
                                                type="submit"
                                                className="bpt_orangebutton"
                                              >
                                                Add to Cart
                                              </button>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>{" "}
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
            </form>
          </div>
          {/* <style>.paymentoptions td {padding: 0px 15px 0px 0px;}
        </style> */}
        </div>
      </section>
    );
  }
}
