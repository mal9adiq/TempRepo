class ResponseScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      type: "",
      tranid: "",
      status: "",
      cardtoken: "",
      maskedno: "",
      amount: "",
    };
  }

  componentDidMount() {
    const responseData = this.props.route.params.response;

    if (Object.keys(responseData).length > 0) {
      this.setState(responseData);
    } else {
      this.setState({ type: "success" });
    }
  }

  render() {
    const { type, tranid, status, cardtoken, maskedno, amount } = this.state;

    return (
      <View style={styles.container}>
        {type == "receiptToken" && (
          <View>
            <Text style={styles.txtHeader}>{"Invoice Order #" + tranid}</Text>
            <Text style={styles.txtDetail}>{"Transaction is " + status}</Text>
            <Text style={styles.txtDetail}>
              {"Order Date: " + dayjs().format("YYYY-MM-DD HH:mm:ss")}
            </Text>
            <Text style={styles.txtHeader}>{"Token Details"}</Text>
            <Text style={styles.txtDetail}>{"Card Token: " + cardtoken}</Text>
            <Text style={styles.txtDetail}>{"Masked Pan: " + maskedno}</Text>
            <Text style={styles.txtHeader}>{"Order Summary"}</Text>
            <Text style={styles.txtDetail}>{"Total: " + amount}</Text>
          </View>
        )}
        {type == "receipt" && (
          <View>
            <Text style={styles.txtHeader}>{"Invoice Order #" + tranid}</Text>
            <Text style={styles.txtDetail}>{"Transaction is " + status}</Text>
            <Text style={styles.txtDetail}>
              {"Order Date: " + dayjs().format("YYYY-MM-DD HH:mm:ss")}
            </Text>
            <Text style={styles.txtHeader}>{"Order Summary"}</Text>
            <Text style={styles.txtDetail}>{"Total: " + amount}</Text>
          </View>
        )}
        {type == "success" && (
          <View>
            <Text style={styles.txtDetail}>{"Transaction is successful"}</Text>
          </View>
        )}
        {type.length == 0 && <ActivityIndicator size={"large"} />}
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.btnAction}
          onPress={() => {
            this.props.navigation.goBack();
          }}
        >
          <Text style={styles.txtAction}>{"Back"}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
