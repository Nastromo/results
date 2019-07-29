import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchInput from './SearchInput';
import TestList from './TestList';
import Panel from './Panel';
import ElementList from './ElementList';



export class Main extends Component {


    render() {
        return (
            <div className="full-width">
                <p className="title-input">Accession:</p>
                <SearchInput
                    id="accession"
                    type="text"
                    view="search-input"
                    url="specimens"
                    onItemClick={this.props.getAccession}
                    isLoading={this.props.isLoadAcc}
                    searchQuery={this.props.searchAcc}
                    searchResults={this.props.accessions} />
                <div className="flex ju-btw">
                    <div>
                        <p className="title-input">Name:</p>
                        <p>{this.props.acc.name}</p>
                    </div>

                    <div>
                        <p className="title-input">DOB:</p>
                        <p>{this.props.acc.name}</p>
                    </div>

                    <div>
                        <p className="title-input">Sex:</p>
                        <p>{this.props.acc.name}</p>
                    </div>

                    <div>
                        <p className="title-input">Client:</p>
                        <p>{this.props.acc.name}</p>
                    </div>

                    <div>
                        <p className="title-input">Physician:</p>
                        <p>{this.props.acc.name}</p>
                    </div>
                </div>

                <TestList />
                <div className="flex ju-btw mar-top-20">
                    <Panel />
                    <ElementList />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    acc: {},
    isLoadAcc: state.searchLoading.accessions,
    searchAcc: state.searchQuery.accessions,
    accessions: state.searchResults.accessions,
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Main)
