import React, { Component } from "react";
import { Table, Button, Popconfirm, message } from "antd";
import { connect } from "react-redux";
import moment from "moment";
import { fetchEvents, deleteEvents } from "../../actions";

const columns = [
  {
    title: "Name",
    dataIndex: "name"
    // width: "20%"
  },
  {
    title: "Date",
    dataIndex: "date",
    render: date => moment(date, "YYYYMMDD").format("YYYY-MM-DD")
    // width: "20%"
  },
  {
    title: "Start",
    dataIndex: "startTime"
    // width: "20%"
  },
  {
    title: "End",
    dataIndex: "endTime"
    // width: "20%"
  },
  {
    title: "# of participants",
    dataIndex: "_participants",
    render: participants => participants.length
    // width: "20%"
  }
];

class EventsTable extends Component {
  state = {
    loading: false,
    selectedRowKeys: []
  };

  onSelectChange = selectedRowKeys => {
    this.setState({ selectedRowKeys });
  };

  confirm = () => {
    this.setState({ loading: true, selectedRowKeys: [] });
    const hide = message.loading("Deleting events...");
    this.props.deleteEvents(this.state.selectedRowKeys, () => {
      hide();
      message.success("Selected events deleted");
      this.setState({ loading: false });
    });
  };

  fetch = async () => {
    this.setState({ loading: true });
    await this.props.fetchEvents(() => {
      this.setState({
        loading: false
      });
    });
  };

  render() {
    const { loading, selectedRowKeys } = this.state;
    const { events } = this.props;

    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange
    };
    const hasSelected = selectedRowKeys.length > 0;

    return (
      <div>
        <div style={{ marginBottom: 16 }}>
          <Popconfirm
            title="Are you sure delete the selected event(s)?"
            onConfirm={this.confirm}
            okText="Yes"
            cancelText="No"
          >
            <Button
              type="danger"
              icon="delete"
              disabled={!hasSelected}
              loading={loading}
            >
              Delete
            </Button>
          </Popconfirm>
          <span style={{ marginLeft: 8 }}>
            {hasSelected ? `Selected ${selectedRowKeys.length} items` : ""}
          </span>
        </div>
        <Table
          pagination={false}
          rowSelection={rowSelection}
          columns={columns}
          rowKey={record => record._id}
          dataSource={events}
          loading={loading}
        />
      </div>
    );
  }
}

function mapStateToProps({ events }) {
  return { events };
}

export default connect(mapStateToProps, { fetchEvents, deleteEvents })(
  EventsTable
);
