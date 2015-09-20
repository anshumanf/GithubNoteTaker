public class MainActivityTest extends ActivityInstrumentationTestCase2<MainActivity> {

  private MainActivity mMainActivity;
  private TextView mWelcomeText;

  public MainActivityTest() {
    super(MainActivity.class);
  }

  @Override
  protected void setUp() throws Exception {
    super.setUp();
    mMainActivity = getActivity();
    mWelcomeText  = (TextView) mMainActivity.findViewById(R.id.my_first_test_text_view);
  }
}
