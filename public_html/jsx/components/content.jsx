import React from 'react';
import BasicTable from "./basicTable.jsx";
import FooterTable from "./dscTable.jsx";
import SortTable from "./sortTable.jsx";
import FilterTable from "./filterTable.jsx";
import PaginationTable from "./paginationTable.jsx";
import MaterialUITable from "./materialUITable.jsx";

export default class Content extends React.Component {
    constructor (props) {
        super(props);
    }
    render () {     
        return (
            <main className="content">
				<div className="content__left"></div>
				<div className="content__center">
					<BasicTable />
					<FooterTable />
					<SortTable />
					<FilterTable />
					<PaginationTable />
					<MaterialUITable />
				</div>
				<div className="content__right"></div>
            </main>          
        );
    }
}
