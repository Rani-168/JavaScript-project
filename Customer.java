public class Customer {
	  int cid;
	  String cname;
	  String cphone;
	  String cemail;
	  
	  
	  public Customer(int cid, String cname, String cphone, String cemail) {
		super();
		this.cid = cid;
		this.cname = cname;
		this.cphone = cphone;
		this.cemail = cemail;
	}


	  @Override
	  public String toString() {
		return "Customer [cid=" + cid + ", cname=" + cname + ", cphone=" + cphone + ", cemail=" + cemail + "]";
	  }

	 
}

