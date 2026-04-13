//Encapsulation ---> Data hiding

public class Product {

 private int id;
 private String name;
 private double price;

 // Default Constructor
 public Product() {
     this.id = 0;
     this.name = "Unknown";
     this.price = 0.0;
 }

 // Parameterized Constructor
 public Product(int id, String name, double price) {
     this.id = id;
     this.name = name;
     this.price = price;
 }

 // Getter Methods
 public int getId() {
     return id;
 }

 public String getName() {
     return name;
 }

 public double getPrice() {
     return price;
 }

 // Setter Methods
 public void setId(int id) {
     this.id = id;
 }

 public void setName(String name) {
     this.name = name;
 }

 public void setPrice(double price) {
     this.price = price;
 }

 // toString Method
 @Override
 public String toString() {
     return "Product [id=" + id + ", name=" + name + ", price=" + price + "]";
 }
}
