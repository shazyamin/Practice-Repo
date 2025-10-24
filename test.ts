import streamlit as st

def age_difference_app():
    st.title("Age Difference Calculator")

    age1 = st.number_input("Enter first person's age:", min_value=0, max_value=120, step=1)
    age2 = st.number_input("Enter second person's age:", min_value=0, max_value=120, step=1)

    if st.button("Calculate Difference"):
        difference = abs(age1 - age2)
        st.success(f"The age difference is {difference} years.")

if __name__ == "__main__":
    age_difference_app()