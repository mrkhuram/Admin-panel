import React from 'react'

class ReaderStatus extends React.Component {
    render() {
        return (
            <div style={{ margin: "50px 0px" }}>
                <div class="content-wrapper">
                    <div id="order_preview" class="wow fadeInUp content_box"
                         style={{visibility:" visible", animationName: "fadeInUp"}}>
                        <div class="row table-header">
                            <div class="col-xs-12 col-md-6">
                                <h2 class="section-title">Set Account Status</h2>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xs-12 col-md-6">
                                <form action="http://test.hiddenlogics.com/action_page.php">
                                    <div class="form-group">
                                        <label for="email">Select Status</label>
                                        <select class="form-control">
                                            <option value="all">Close</option>
                                            <option value="name">Ban</option>
                                            <option value="email">Active</option>
                                        </select>
                                    </div>
                                    <div class="form-group">
                                        <label for="pwd">Reason:</label>
                                        <textarea rows="5" class="form-control"></textarea>
                                    </div>
                                    <button type="submit" class="btn btn-default">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default ReaderStatus