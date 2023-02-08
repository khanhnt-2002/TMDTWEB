import React from 'react';
import {Layout} from 'antd';
const {Footer} = Layout;

export default class FooterComponent extends React.Component {
	render() {
		return(
			<Footer id="footer">
		      <div className="row">
		        <div className="col-8 col-md footmargin">
		          <h5>Khanh shop<small className="d-block mb-4 text-muted">&copy;2021</small></h5>
		          <ul className="list-unstyled text-small">
		            <li>1461226 Nguyễn Tấn Khanh</li>
		            <li>1560454 Phạm Văn Hiếu</li>
		            <li>1560461 Bùi Qúy Dương</li>
		          </ul>
		        </div>
		        <div className="col-2 col-md">
		          <br/>
		          <ul className="list-unstyled text-small">
		            <li><img src="./nike.png" width="200px" alt="nike"/></li>
		          </ul>
		        </div>
		        <div className="col-2 col-md">
		          <ul className="list-unstyled text-small">
		            <li><img src="./adidas.png" width="200px" alt="adidas"/></li>
		          </ul>
		        </div>
		        <div className="col-2 col-md">
		          <ul className="list-unstyled text-small">
		          	<br/>
		            <li><img src="./bocongthuong.png" width="150px" alt="bocongthuong"/></li>
		            <li><img src="./sanphamchinhhang.png" width="150px" alt="sanphamchinhhang"/></li>
		          </ul>
		        </div>
		      </div>
		    </Footer>
		);
	}
}