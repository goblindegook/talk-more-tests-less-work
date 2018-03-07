import org.scalacheck.Arbitrary._

object GenUser {
  def user: Gen[User] = for {
    name <- arbitrary[String]
    age <- arbitrary[Int]
  } yield User(name, age)
}