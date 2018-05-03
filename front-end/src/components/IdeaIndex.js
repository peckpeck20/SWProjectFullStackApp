import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ReactTable from "react-table";
import "react-table/react-table.css";
import "react-confirm-alert/src/react-confirm-alert.css";
import { getAllIdeas } from "../actions/actions";

class IdeaIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.getAllIdeas();
  }

  listIdeas = () => {
    console.log(this.props.ideaList);
    let ideaList = this.props.ideaList;
    if(ideaList === undefined){
      return '';
    } else {
      const listAllIdeas = <ReactTable
        data={ideaList}
        columns={[
          {
            Header: "ID",
            accessor: "id",
            filterable: true
          },
          {
            Header: "Title",
            accessor: "title",
            filterable: true
          },
          {
            Header: "Description",
            accessor: "description",
            filterable: true
          },
          {
            Header: "Budget",
            accessor: "budget",
            filterable: true
          },
          {
            Header: "People Needed",
            accessor: "peopleNeeded",
            filterable: true
          },
          {
            Header: "Creation Date",
            accessor: "creationDate",
            filterable: true
          },
          {
            Header: "Last Modified",
            accessor: "lastModified",
            filterable: true
          },
          {
            Header: "Category ID",
            accessor: "categoryId",
            filterable: true
          }
        ]}
        minRows={1}
        className="-striped -highlight"
      />
      return listAllIdeas;
    }
  }

  render() {
    let ideaTable;

    if(this.props.ideaList === undefined) {
      ideaTable =
        <tr>
          <td></td>
          <td>Loading...</td>
          <td></td>
        </tr>
      ;
    } else {
      ideaTable = this.listIdeas();
    }
    const data = this.props.ideaList;
    const columns = [
      {
        Header: "ID",
        accessor: "id",
        filterable: true
      },
      {
        Header: "Title",
        accessor: "title",
        filterable: true
      },
      {
        Header: "Description",
        accessor: "description",
        filterable: true
      },
      {
        Header: "Budget",
        accessor: "budget",
        filterable: true
      },
      {
        Header: "People Needed",
        accessor: "peopleNeeded",
        filterable: true
      },
      {
        Header: "Creation Date",
        accessor: "creationDate",
        filterable: true
      },
      {
        Header: "Last Modified",
        accessor: "lastModified",
        filterable: true
      },
      {
        Header: "Category ID",
        accessor: "categoryId",
        filterable: true
      }
    ];
    return (
      <div className="container">

      </div>
    );
  }
}

IdeaIndex.propTypes = {
  ideaList: PropTypes.array.isRequired
};

const mapStateToProps = (state) => {
  return { ideaList: state.idea.ideaList };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAllIdeas: () => getAllIdeas(dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps) (IdeaIndex);